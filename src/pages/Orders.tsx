import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { Package, Calendar, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Order {
  id: string;
  total_amount: number;
  status: string;
  payment_method: string;
  shipping_address: any;
  created_at: string;
  order_items: OrderItem[];
}

interface OrderItem {
  product_name: string;
  product_image: string;
  quantity: number;
  price: number;
}

const Orders = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const items = JSON.parse(cart);
      setCartItemsCount(items.reduce((acc: number, item: any) => acc + item.quantity, 0));
    }

    fetchOrders();
  }, [navigate]);

  const fetchOrders = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("Please log in to view orders");
        navigate("/auth");
        return;
      }

      const { data, error } = await supabase
        .from("orders")
        .select(`
          *,
          order_items (*)
        `)
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;

      setOrders(data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to load orders");
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "processing":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "shipped":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "delivered":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "cancelled":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartItemsCount} />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Package className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">My Orders</h1>
          </div>
          <p className="text-muted-foreground">
            Track and manage your orders
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading your orders...</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground mb-6">No orders yet</p>
            <Link to="/shop">
              <Button variant="hero" size="lg">Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-foreground">Order #{order.id.slice(0, 8)}</p>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(order.created_at).toLocaleDateString('en-IN', { 
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                    <p className="text-2xl font-bold text-primary">
                      ₹{order.total_amount.toLocaleString()}
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Shipping Address
                    </h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p className="font-medium text-foreground">{order.shipping_address.fullName}</p>
                      <p>{order.shipping_address.address}</p>
                      <p>
                        {order.shipping_address.city}, {order.shipping_address.state} - {order.shipping_address.pincode}
                      </p>
                      <p>Phone: {order.shipping_address.phone}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Payment Method</h3>
                    <p className="text-sm text-muted-foreground capitalize">
                      {order.payment_method === 'card' ? 'Credit/Debit Card' : 
                       order.payment_method === 'upi' ? 'UPI Payment' : 
                       'Cash on Delivery'}
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Order Items</h3>
                  <div className="space-y-3">
                    {order.order_items.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <img
                          src={item.product_image}
                          alt={item.product_name}
                          className="w-16 h-16 object-cover rounded bg-muted"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{item.product_name}</p>
                          <p className="text-sm text-muted-foreground">
                            Qty: {item.quantity} × ₹{item.price.toLocaleString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            ₹{(item.quantity * item.price).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Orders;
