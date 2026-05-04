import { X, CircleAlert } from "lucide-react";
import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "../../ui/button";



function CreateCategoryForm({ setClose }) {


    return (
        <div className="bg-white w-screen max-w-170 rounded">
            <div className="p-6 bg-[#FCFCFC] border-b border-gray-400 flex items-center justify-between">
                <h3 className="text-lg tet">Create Category</h3>
                <X onClick={setClose} size={20} className="text-gray-400 cursor-pointer" />
            </div>

            <div className="p-6 space-y-6">
                <Field>
                    <FieldLabel htmlFor="input-field-categorie_name" className="font-semibold text-lg">Category Name</FieldLabel>
                    <Input
                        id="input-field-categorie_name"
                        type="text"
                        placeholder="e.g., Subscriptions, Groceries"
                        className="py-5"
                    />
                </Field>
                <div className="bg-[#FAFAFA] rounded ring ring-gray-300 p-4">
                    <div className=" text-[#A8A8B1]/95">
                        <p className="flex items-start gap-2"><CircleAlert /> Adding a new category will allow you to track transactions and set custom budget limits for better financial discipline.</p>
                    </div>
                </div>

                <div className="text-end space-x-4">
                    <Button onClick={setClose} variant="outline">cancel</Button>
                    <Button className={"px-8"}>Create</Button>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default CreateCategoryForm;