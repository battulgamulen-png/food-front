import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export const Dialogs = ({ addDishClicked, setAddDishClicked }) => {
  return (
    <Dialog open={addDishClicked} onOpenChange={setAddDishClicked}>
      <DialogContent className="w-[460px] h-[592px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Add new Dish to Appetizers
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-1 py-4">
          <div className="grid gap-1">
            <Label htmlFor="food-name" className="text-base font-semibold">
              Food name
            </Label>
            <Input
              id="food-name"
              name="foodName"
              placeholder="Type food name"
              className="h-12"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="food-price" className="text-base font-semibold">
              Food price
            </Label>
            <Input
              id="food-price"
              name="foodPrice"
              type="number"
              placeholder="Enter price..."
              className="h-12"
            />
          </div>
          <div className="col-span-2 grid gap-1">
            <Label htmlFor="ingredients" className="text-base font-semibold">
              Ingredients
            </Label>
            <textarea
              id="ingredients"
              name="ingredients"
              placeholder="List ingredients..."
              className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="col-span-2 grid gap-1">
            <Label htmlFor="food-image" className="text-base font-semibold">
              Food image
            </Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg h-[138px] flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-600">
                Choose a file or drag & drop it here
              </p>
              <input
                id="food-image"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-base"
          >
            Add Dish
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
