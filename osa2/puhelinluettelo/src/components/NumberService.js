
import axios from 'axios'
const url = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = newPerson => {
    return axios.post(url, newPerson)
}

const remove = person => {
    const request = axios.delete(`${url}/${person.id}`)
}

const replace = (oldPerson, newPerson) => {
    const request = axios.put(
        `${url}/${oldPerson.id}`,
        {...oldPerson, number:newPerson.number}
    )
    return request.then(response => response.data)
}

export default {getAll, create, remove, replace}