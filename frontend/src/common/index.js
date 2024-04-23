// const backendDomin = "http://localhost:8080"

// const SummaryApi = {
//     signUP : {
//         url : `${backendDomin}/api/signup`,
//         method : "post"
//     },
//     signIn : {
//         url : `${backendDomin}/api/signin`,
//         method : "post"
//     },
//     current_user : {
//         url : `${backendDomin}/api/user-details`,
//         method : "get"
//     },
//     logout_user : {
//         url : `${backendDomin}/api/userLogout`,
//         method : 'get'
//     },
//     allUser : {
//         url : `${backendDomin}/api/all-user`,
//         method : 'get'
//     },
//     updateUser : {
//         url : `${backendDomin}/api/update-user`,
//         method : "post"
//     },
//     uploadProduct : {
//         url : `${backendDomin}/api/upload-product`,
//         method : 'post'
//     },
//     allProduct : {
//         url : `${backendDomin}/api/get-product`,
//         method : 'get'
//     },
//     updateProduct : {
//         url : `${backendDomin}/api/update-product`,
//         method  : 'post'
//     },
//     categoryProduct : {
//         url : `${backendDomin}/api/get-categoryProduct`,
//         method : 'get'
//     },
//     categoryWiseProduct : {
//         url : `${backendDomin}/api/category-product`,
//         method : 'post'
//     },
//     productDetails : {
//         url : `${backendDomin}/api/product-details`,
//         method : 'post'
//     },
//     addToCartProduct : {
//         url : `${backendDomin}/api/addtocart`,
//         method : 'post'
//     },
//     addToCartProductCount : {
//         url : `${backendDomin}/api/countAddToCartProduct`,
//         method : 'get'
//     },
//     addToCartProductView : {
//         url : `${backendDomin}/api/view-card-product`,
//         method : 'get'
//     },
//     updateCartProduct : {
//         url : `${backendDomin}/api/update-cart-product`,
//         method : 'post'
//     },
//     deleteCartProduct : {
//         url : `${backendDomin}/api/delete-cart-product`,
//         method : 'post'
//     },
//     searchProduct : {
//         url : `${backendDomin}/api/search`,
//         method : 'get'
//     },
//     filterProduct : {
//         url : `${backendDomin}/api/filter-product`,
//         method : 'post'
//     }
// }


// export default SummaryApi



const SummaryApi = {
    signUP : {
        url : `/api/signup`,
        method : "post"
    },
    signIn : {
        url : `/api/signin`,
        method : "post"
    },
    current_user : {
        url : `/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `/api/userLogout`,
        method : 'get'
    },
    allUser : {
        url : `/api/all-user`,
        method : 'get'
    },
    updateUser : {
        url : `/api/update-user`,
        method : "post"
    },
    uploadProduct : {
        url : `/api/upload-product`,
        method : 'post'
    },
    allProduct : {
        url : `/api/get-product`,
        method : 'get'
    },
    updateProduct : {
        url : `/api/update-product`,
        method  : 'post'
    },
    categoryProduct : {
        url : `/api/get-categoryProduct`,
        method : 'get'
    },
    categoryWiseProduct : {
        url : `/api/category-product`,
        method : 'post'
    },
    productDetails : {
        url : `/api/product-details`,
        method : 'post'
    },
    addToCartProduct : {
        url : `/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `/api/view-card-product`,
        method : 'get'
    },
    updateCartProduct : {
        url : `/api/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `/api/search`,
        method : 'get'
    },
    filterProduct : {
        url : `/api/filter-product`,
        method : 'post'
    }
}

export default SummaryApi;
