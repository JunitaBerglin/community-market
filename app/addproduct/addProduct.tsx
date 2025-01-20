import { AddProductForm } from "@/components/forms/add-product-form";
import { SidebarHeader } from "@/components/ui/sidebar";

function AddProduct() {
  return (
    <div className="pt-40">
      <SidebarHeader className="text-3xl">Add product</SidebarHeader>
      <AddProductForm />
    </div>
  );
}
export default AddProduct;
