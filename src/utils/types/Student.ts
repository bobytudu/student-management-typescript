export interface Student {
    first_name: string;
    last_name: string;
    dob: string;
    email: string;
    gender: string;
    id: {
        $oid: string;
    }
}