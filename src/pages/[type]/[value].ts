var data: any = {
    num: null,
    name: null,
}
export async function get({ params }: any) {
    if (params.type === 'get') {
        return {
            body: JSON.stringify(data)
        }
    } else {
        if (params.type === 'num') {
            if (params.value !== 'null') {
                data.num = params.value
            } else {
                data.num = null
            }
        }
        else if (params.type === 'name') {
            if (params.value !== 'null') {
                data.name = params.value
            } else {
                data.name = null
            }
        }
        return { body: '' }
    }
}
