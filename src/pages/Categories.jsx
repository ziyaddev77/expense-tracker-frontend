import { useState } from "react"
import { Button } from "../components/ui/button"
import { Plus, CircleAlert, Trash } from "lucide-react"
import { BaseModal, CreateCategoryForm } from "../components";
import DeleteCategoryModal from "../components/features/categories/DeleteCategoryModal";

function Categories() {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isDeleteCategoryOpen, setIsDeleteCategoryOpen] = useState(false);
  return (
    <div>

      {isCategoryModalOpen && (
        <BaseModal>
          <CreateCategoryForm setClose={() => setIsCategoryModalOpen(false)} />
        </BaseModal>
      )}

      {isDeleteCategoryOpen && (
        <BaseModal>
          <DeleteCategoryModal setClose={() => setIsDeleteCategoryOpen(false)} />
        </BaseModal>
      )}

      {/* header */}
      <div className="flex items-center justify-between mb-7">
        <div>
          <h1 className="text-3xl font-semibold">Categories</h1>
          <p className="text-sm text-gray-500">
            Organize your spending with custom lables.
          </p>
        </div>
        <Button onClick={() => setIsCategoryModalOpen(true)}>
          <Plus /> Add Expenses
        </Button>
      </div>
      {/* === header === */}
      {/* categries content */}
      <div className="grid grid-cols-1 py-9 border-b border-gray-300/50 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="ring group transition relative cursor-pointer ring-gray-300 rounded p-5 bg-white flex gap-3 items-start">
          <span className="p-5 bg-gray-700 rounded inline-block"></span>
          <div className="flex flex-col">
            <span className="text-[#16332D] font-semibold">Rent</span>
            <span className="text-[#16332D]/80 ">Monthly housing costs</span>
          </div>
          <Trash onClick={() => setIsDeleteCategoryOpen(true)} className="group-hover:block hidden text-red-500 absolute top-0 right-0"/>
        </div>
        <div className="ring ring-gray-300 rounded p-5 bg-white flex gap-3 items-start">
          <span className="p-5 bg-gray-700 rounded inline-block"></span>
          <div className="flex flex-col">
            <span className="text-[#16332D] font-semibold">Rent</span>
            <span className="text-[#16332D]/80 ">Monthly housing costs</span>
          </div>
        </div>  <div className="ring ring-gray-300 rounded p-5 bg-white flex gap-3 items-start">
          <span className="p-5 bg-gray-700 rounded inline-block"></span>
          <div className="flex flex-col">
            <span className="text-[#16332D] font-semibold">Rent</span>
            <span className="text-[#16332D]/80 ">Monthly housing costs</span>
          </div>
        </div>  <div className="ring ring-gray-300 rounded p-5 bg-white flex gap-3 items-start">
          <span className="p-5 bg-gray-700 rounded inline-block"></span>
          <div className="flex flex-col">
            <span className="text-[#16332D] font-semibold">Rent</span>
            <span className="text-[#16332D]/80 ">Monthly housing costs</span>
          </div>
        </div>  <div className="ring ring-gray-300 rounded p-5 bg-white flex gap-3 items-start">
          <span className="p-5 bg-gray-700 rounded inline-block"></span>
          <div className="flex flex-col">
            <span className="text-[#16332D] font-semibold">Rent</span>
            <span className="text-[#16332D]/80 ">Monthly housing costs</span>
          </div>
        </div>  <div className="ring ring-gray-300 rounded p-5 bg-white flex gap-3 items-start">
          <span className="p-5 bg-gray-700 rounded inline-block"></span>
          <div className="flex flex-col">
            <span className="text-[#16332D] font-semibold">Rent</span>
            <span className="text-[#16332D]/80 ">Monthly housing costs</span>
          </div>
        </div>  <div className="ring ring-gray-300 rounded p-5 bg-white flex gap-3 items-start">
          <span className="p-5 bg-gray-700 rounded inline-block"></span>
          <div className="flex flex-col">
            <span className="text-[#16332D] font-semibold">Rent</span>
            <span className="text-[#16332D]/80 ">Monthly housing costs</span>
          </div>
        </div>  <div className="ring ring-gray-300 rounded p-5 bg-white flex gap-3 items-start">
          <span className="p-5 bg-gray-700 rounded inline-block"></span>
          <div className="flex flex-col">
            <span className="text-[#16332D] font-semibold">Rent</span>
            <span className="text-[#16332D]/80 ">Monthly housing costs</span>
          </div>
        </div>  <div className="ring ring-gray-300 rounded p-5 bg-white flex gap-3 items-start">
          <span className="p-5 bg-gray-700 rounded inline-block"></span>
          <div className="flex flex-col">
            <span className="text-[#16332D] font-semibold">Rent</span>
            <span className="text-[#16332D]/80 ">Monthly housing costs</span>
          </div>
        </div>
      </div>
      {/*=== categries content ===*/}
      <div className="mt-9 text-[#16332D]/60">
        <p className="flex items-center gap-2"><CircleAlert /> Catgories help the Budget Planner track your monthly spending limits more accurately.</p>
      </div>


    </div>
  )
}

export default Categories