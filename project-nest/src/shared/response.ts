export class DefaultResponse {
    static repsonseCreate(data) {
        return {
            statusCode: 200,
            status: true,
            msg: 'Success',
            data: data,
        };
    }

    static responseUpdate(data) {
        return {
            statusCode: 201,
            status: true,
            msg: 'Success',
            data: data,
        };
    }

    static responseGet(data) {
        return {
            statusCode: 200,
            status: true,
            msg: 'Success',
            data: data,
        };
    }
    static responsePagination(data, page) {
        return {
            statusCode: 200,
            msg: 'Success',
            status: true,
            data: data,
            ...page,
        };
    }

    static responseFailed(data) {
        return {
            statusCode: 400,
            status: false,
            msg: 'Bad Request',
            data: data,
        };
    }

    static responseUnauthorized(data) {
        return {
            statusCode: 401,
            msg: 'Unauthorized',
            status: false,
            data: data,
        };
    }
}
