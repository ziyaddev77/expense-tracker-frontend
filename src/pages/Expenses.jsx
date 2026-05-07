import { ButtonGroup } from "@/components/ui/button-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search } from "lucide-react";
import { useState } from "react";
import { BaseModal, CreateExpenseForm, DeleteExpenseForm, EditExpenseForm, ExpensesTable } from "../components";
import { Button } from "../components/ui/button";
import { useGetExpenses } from "../hooks";

function Expenses() {
  // =============== local state ================
  const [isCreateExpenseModalOpen, setIsCreateExpenseModalOpen] = useState(false);
  const [isDeleteExpenseModalOpen, setIsDeleteExpenseModalOpen] = useState(false);
  const [isEditExpenseModalOpen, setIsEditExpenseModalOpen] = useState(false);

  // =============== fetch expenses =============
  const {data,isLoading} = useGetExpenses();


  return (
    <div>
      {isCreateExpenseModalOpen && (
        <BaseModal>
          <CreateExpenseForm
            setCloseModal={() => setIsCreateExpenseModalOpen(false)}
          />
        </BaseModal>
      )}
      {isDeleteExpenseModalOpen && (
        <BaseModal>
          <DeleteExpenseForm
            setCloseModal={() => setIsDeleteExpenseModalOpen(false)}
          />
        </BaseModal>
      )}
      {isEditExpenseModalOpen && (
        <BaseModal>
          <EditExpenseForm
            setCloseModal={() => setIsEditExpenseModalOpen(false)}
          />
        </BaseModal>
      )}

      <div className="flex items-center justify-between mb-7">
        <div>
          <h1 className="text-3xl font-semibold">Expenses</h1>
          <p className="text-sm text-gray-500">
            Manage and track your expenses.
          </p>
        </div>
        <Button onClick={() => setIsCreateExpenseModalOpen(true)}>
          <Plus /> Add Expenses
        </Button>
      </div>

      {/* search bar & filter */}
      <div className="flex min-h-10 flex-col gap-4 mb-7 rounded bg-white p-3 shadow-sm sm:flex-row sm:items-end">
        <div className="flex-1">
          <Field>
            <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
            <ButtonGroup className="w-full">
              <Input id="input-button-group" placeholder="Type to search..." />
              <Button
                variant="outline"
                className={"py-3"}
                aria-label="Search expenses"
              >
                <Search />
              </Button>
            </ButtonGroup>
          </Field>
        </div>
        <div className="w-full sm:w-44">
          <Field className="min-h-full">
            <FieldLabel>Category</FieldLabel>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All categories</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="transport">Transport</SelectItem>
                  <SelectItem value="bills">Bills</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </div>
      </div>
      {/* === search bar & filter */}

      {/* table content */}
      <div className="w-full min-w-0 overflow-x-auto no-scrollbar shadow rounded bg-white h-90">
        <ExpensesTable setOpenEditModal={() => setIsEditExpenseModalOpen(true)} setOpenDeleteModal={() => setIsDeleteExpenseModalOpen(true)}/>
        {/* pagination */}
        <div className="flex items-center justify-between sticky bottom-0 bg-white p-2">
          <p className="text-xs font-bold text-stone-600">
            Showing <span>1</span> of <span>5</span> of <span>25</span> entries
          </p>
          <div className="space-x-3">
            <Button variant="outline" className={"py-4"}>
              Previous
            </Button>
            <Button variant="outline" className={"py-4"}>
              Next
            </Button>
          </div>
        </div>
        {/* ==- pagination */}
      </div>
      {/* === table content */}
    </div>
  );
}

export default Expenses;
