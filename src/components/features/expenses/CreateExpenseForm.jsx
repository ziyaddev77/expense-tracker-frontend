import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DollarSign, X } from "lucide-react";
import { Button } from "../../ui/button";

function CreateExpenseForm({ setCloseModal }) {
  return (
    <>
      <div className="flex w-screen border-b border-gray-300 max-w-100 items-center justify-between p-5">
        <h4 className="font-semibold">Add Expenses</h4>
        <X size={18} className="cursor-pointer" onClick={setCloseModal} />
      </div>
      <div>
        <div  className="p-5">
          <FieldGroup>
            <Field className="relative">
              <FieldLabel htmlFor="fieldgroup-amount">Amount</FieldLabel>
              <Input
                type="number"
                id="fieldgroup-amount"
                className="pl-5"
                placeholder="0.00"
              />
              <DollarSign
                size={16}
                className="text-gray-400 absolute top-[60%] left-[-47%]"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="fieldgroup-description">
                Description
              </FieldLabel>
              <Input
                id="fieldgroup-Description"
                type="text"
                placeholder="What is this for?"
              />
            </Field>
            <Field>
              <FieldLabel>Category</FieldLabel>
              <Select defaultValue=" ">
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="z-9999">
                  <SelectGroup>
                    <SelectItem value=" ">Select a category</SelectItem>
                    <SelectItem value="non">none</SelectItem>
                    <SelectItem value="transport">Transport</SelectItem>
                    <SelectItem value="bills">Bills</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        </div>
        <div className="mt-4 py-4 border-t text-right px-4 space-x-2 border-gray-300">
          <Button onClick={setCloseModal} variant="outline" className={"py-3"}>
            Cancel
          </Button>
          <Button className={"py-3"}>Save Expense</Button>
        </div>
      </div>
    </>
  );
}

export default CreateExpenseForm;
