

/**
* Verifies if the UserId is valid
* @param {string} userid, .
* @return {string} returnvaluenull if pass, else returns error message.
*/
export const isValidUserId = (userid: string | null): string | null => {
    let errormessage: string | null = null;
    if (!userid) {
        errormessage = "please enter UserId";
    } else if(userid.length != 6) {
        errormessage = "UserId contains 6 characters";
    }

    return errormessage;
}

// =====================================================