import { storageService } from './storageService.js'
import { makeId } from './utilService.js'
import { httpService } from './httpService';

export const contactService = {
    query,
    save,
    remove,
    getById,
    getEmptyContact,
}

const CONTACT_URL = 'call';



async function query() {
    try{
        const contactsToReturn = await httpService.get(CONTACT_URL);
        return contactsToReturn;
    }catch(err){
        return err
    }
}


function getById(id) {

}

function remove(id) {

}

function save(contactToSave) {

}

function getEmptyContact() {
    return {
        title: '',
        type: '',
        property: 100
    }
}

