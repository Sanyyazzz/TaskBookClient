export const getCategoryIdByName = (categoriesList, categoryName) => {
    let id = null;
    categoriesList.forEach((category)=>{
        if(category.category == categoryName) id=category.id
    });
    return id;
}