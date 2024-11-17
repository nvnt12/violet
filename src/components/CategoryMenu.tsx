import { cn } from "@/utility/mergeClassNames"
import { useState } from "react"

export default function CategoryMenu() {
    const CategoryMenuList: string[] = [
        'Women',
        'Men',
        'Kids',
        'Sports',
        'Brands',
        'New',
        'Sale',
    ]
    const [selectedCategory, setSelectedCategory] = useState<string>(CategoryMenuList[0])

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category)
    }

    return (
        <div className="container">
            <div className="container-content w-full flex flex-row gap-3 py-2 border-b-2 border-gray-200">
                {CategoryMenuList.map((category, index) => (
                    <div key={`category-${category}-${index}`} className={cn("py-2", index !== 0 ? "px-3": "pr-3")}>
                        <button type="button" onClick={() => handleCategoryClick(category)} className={cn(selectedCategory === category ? "text-midnight-blue font-semibold" : "text-muted-black font-normal", category === "Sale" && " text-red-600")}>{category}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}