/* eslint-disable no-useless-escape */

export function isEmail(email : string | null) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email) return false

    if (email.match(regex)) {
        return true;
    } else {
        return false;
    }
}

export function hasNullProp(obj: object) {
	for (const key of Object.keys(obj)) {
    	if (obj[key as keyof object] === null) {
            return true
        }
    }

	return false
}