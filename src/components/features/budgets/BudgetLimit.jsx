

function BudgetLimit() {


    return (
        <div className="pt-5">
            <div className="grid grid-cols-3">
                <div className="ring ring-gray-400/70 bg-white rounded-md p-6">
                    <div className="flex items-center justify-between">
                        <span className="p-5 inline-block rounded-md bg-green-950"></span>
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-500">Spent</span>
                            <span className="font-semibold text-lg">1.200.00 DH</span>
                        </div>
                    </div>
                    {/* category name */}
                    <h5 className="text-2xl my-3">Rent & Utlities</h5> 

                    <div className="text-[#16332D] flex items-center justify-between">
                        <span>Usage: 100%</span>
                        <span>1.200 / 1.200 DH</span>
                    </div>
                    <div className="h-2 mt-2 rounded-2xl w-full overflow-hidden">
                        <div className="h-full w-full bg-[#16332D]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BudgetLimit