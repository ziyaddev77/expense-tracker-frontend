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
import { DollarSign, Info, X } from "lucide-react";
import { Button } from "../../ui/button";

function EditExpenseForm({ setCloseModal }) {
  return (
    <div className="w-screen max-w-130">
      <div className="p-4 flex items-center justify-between border-b border-gray-500/90">
        <h2 className="text-xl font-semibold">Edit Expense</h2>
        <X
          onClick={setCloseModal}
          size={20}
          className="text-gray-500 cursor-pointer"
        />
      </div>

      {/* edit form  */}
      <div className="p-4">
        <FieldGroup>
          <Field className="relative">
            <FieldLabel htmlFor="date">Date</FieldLabel>
            <Input type="date" id="date" />
          </Field>
          <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Input id="Description" type="text" />
          </Field>

          {/* category & amount */}

          <FieldGroup className="grid max-w-sm grid-cols-2">
            <Field>
              <FieldLabel>Category</FieldLabel>
              <Select value="non">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="z-9999">
                  <SelectGroup>
                    <SelectItem value="non">none</SelectItem>
                    <SelectItem value="transport">Transport</SelectItem>
                    <SelectItem value="bills">Bills</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field className="relative">
              <FieldLabel htmlFor="amout">Amount</FieldLabel>
              <Input type="number" id="amount" className="pl-5" />
              <DollarSign
                size={16}
                className="text-gray-400 absolute top-[60%] left-[-44%]"
              />
            </Field>
          </FieldGroup>
          {/* category & amount */}
        </FieldGroup>
        <div className="rounded p-3 flex items-start gap-2 bg-[#F3F4F5] mt-5">
          <Info className="text-[#626D69]" />
          <p className="text-[#626D69] text-sm">
            Adjusting this transaction will be update your{" "}
            <span>'Food & Dining'</span> budget for October automatically.
          </p>
        </div>
      </div>

      <div className="p-4 border-t space-x-3 border-gray-400 bg-[#FDFDFD] text-right">
            <Button onClick={setCloseModal} variant="outline">Cancel</Button>
            <Button className={"px-14"}>Save</Button>
      </div>
    </div>
  );
}

export default EditExpenseForm;
