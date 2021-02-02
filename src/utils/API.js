import axios from "axios";

export default {
    getUsers: function(){
        return axios.get("https://randomuser.me/api/?results=5&nat=us")
    },
    getGenders: function(){
        return axios.get("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?inc=gender")
    },
    getNames: function(name){
        return axios.get("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=200&inc=" + name)
    }
}
//replace google books url with the cloud atlas url