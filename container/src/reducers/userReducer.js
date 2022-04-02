export const userSigninReducer = ( state = {} , action ) => 

    {
        
        console.log(state);

        switch (action.type) {
            case 'USER_SIGNIN_REQUEST':
                    return { loading: true };
            case 'USER_SIGNIN_SUCCESS':
                    return { 
                        loading: false,
                        modules: ['m1', 'm2', 'm3'] ,
                        modulePerms:[
                            'm1-feature1',
                            'm1-feature2',
                            'm1-feature3',
                            'm1-feature4',
                            'm2-feature1',
                            'm2-feature2',
                            'm2-feature3',
                            'm2-feature4',
                            'm3-feature1']
                        };
            case 'USER_CHANGE_PERMISSIONS':
                return { 
                    loading: false,
                    modules: ['m1'] ,
                    modulePerms:[
                        'm1-feature2',
                        'm1-feature3']
                    };            
            case 'USER_SIGNIN_FAIL':
                    return { loading: false, error: action.payload };
            case 'USER_SIGNOUT':
                    return {};
            default:
            return state;
    }
};
