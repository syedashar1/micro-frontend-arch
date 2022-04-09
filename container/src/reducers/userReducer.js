import {m1 , m2 , m3 , m1_feature1 , m1_feature2 , m2_feature3 , m2_feature1 , m1_feature3 , m2_feature2 , m3_feature1 , m1_feature4 , m2_feature4 } from './utils'

export const userSigninReducer = ( 
    
    state = { 
        modules : window.sessionStorage.getItem("modules") ?  JSON.parse(window.sessionStorage.getItem("modules")) : null ,
        modulePerms : window.sessionStorage.getItem("modulePerms") ?  JSON.parse(window.sessionStorage.getItem("modulePerms")) : null ,
    }
    , action ) => 
    {
        
        console.log(state);

        switch (action.type) {
            case 'USER_SIGNIN_REQUEST':
                    return { loading: true };
            case 'USER_SIGNIN_SUCCESS':
                    return { 
                        loading: false,
                        modules: {m1 , m2 , m3 },
                        modulePerms:{
                            m1_feature1,
                            m1_feature2,
                            m1_feature3,
                            m1_feature4,
                            m2_feature1,
                            m2_feature2,
                            m2_feature3,
                            m2_feature4,
                            m3_feature1}
                        };
            case 'USER_CHANGE_PERMISSIONS':
                return { 
                    loading: false,
                    modules: {m1} ,
                    modulePerms:{
                        m1_feature2,
                        m1_feature3 }
                    };            
            case 'USER_SIGNIN_FAIL':
                    return { loading: false, error: action.payload };
            case 'USER_SIGNOUT':
                    return {};
            default:
            return state;
    }
};
