import Types from './MiddlewareTypes'

const requestMiddlewareMasterAction = (action) => ({
    type: Types.MIDDLEWARE_MASTER_ACTION,
    action
});

export default {
    requestMiddlewareMasterAction
}