class easyFetch {
    get(url){
        return new Promise((resolve,reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }
    post(url,data){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(data));
        })
    }
    put(url,data){
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                    
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
    delete(url){
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(date => resolve('item deleted'))
            .catch(err => reject(err))
        })
    }
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    




//class EasyHTTP {
//
//    //Get
//    get(url) {
//        return new Promise((resolve, reject) => {
//            fetch(url)
//                .then(res => res.json())
//                .then(data => resolve(data))
//                .catch(err => reject(err));
//
//
//        })
//
//    }
//    //Post
//    post(url, data) {
//        return new Promise((resolve, reject) => {
//            fetch(url, {
//                    method: 'post',
//                    headers: {
//                        'content-type': 'application/json'
//                    },
//                    body: JSON.stringify(data)
//                })
//                .then(res => res.json())
//                .then(data => resolve(data))
//                .catch(err => reject(err));
//        })
//
//    }
//
//
//    //Put
//put(url){
//    return new Promise((resolve,reject) => {
//        fetch(url,{
//            method: 'PUT',
//            headers: {
//                'content-type': 'application/json'
//            },
//            body: JSON.stringify(data)
//        })
//        .then(res => res.json())
//        .then(data => resolve(data))
//        .catch(err => reject(err));
//    })
//}
//    //Delete
//delete(url){
//    return new Promise((resolve,reject) => {
//        fetch(url,{
//            method: 'DELETE',
//            headers: {
//                'content-type':'application/json'
//            }
//            
//        })
//        .then(res => res.json())
//        .then(data => resolve('Data was deleted'))
//        .catch(err => reject(err));
//        
//    })
//}

    //    delete(url) {
//        return new Promise((resolve, reject) => {
//            fetch(url, {
//                    method: 'DELETE',
//                    headers: {
//                        'Content-type': 'application/json'
//                    },
//
//
//                })
//                .then(res => res.json())
//                .then(() => resolve('resource deleted'))
//                .catch(err => reject(err));
//        })
//
//    }
//}
