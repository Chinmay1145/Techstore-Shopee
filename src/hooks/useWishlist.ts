import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWishlist = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setWishlistItems([]);
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("wishlist")
        .select("product_id")
        .eq("user_id", user.id);

      if (error) throw error;

      setWishlistItems(data?.map((item) => item.product_id) || []);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToWishlist = async (productId: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("Please log in to add items to wishlist");
        return false;
      }

      const { error } = await supabase
        .from("wishlist")
        .insert({ user_id: user.id, product_id: productId });

      if (error) throw error;

      setWishlistItems((prev) => [...prev, productId]);
      toast.success("Added to wishlist");
      return true;
    } catch (error: any) {
      if (error?.code === "23505") {
        toast.error("Already in wishlist");
      } else {
        toast.error("Failed to add to wishlist");
      }
      return false;
    }
  };

  const removeFromWishlist = async (productId: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return false;

      const { error } = await supabase
        .from("wishlist")
        .delete()
        .eq("user_id", user.id)
        .eq("product_id", productId);

      if (error) throw error;

      setWishlistItems((prev) => prev.filter((id) => id !== productId));
      toast.success("Removed from wishlist");
      return true;
    } catch (error) {
      toast.error("Failed to remove from wishlist");
      return false;
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.includes(productId);
  };

  useEffect(() => {
    fetchWishlist();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT") {
        fetchWishlist();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return {
    wishlistItems,
    isLoading,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    refreshWishlist: fetchWishlist,
  };
};
