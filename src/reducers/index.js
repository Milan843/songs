import {combineReducers} from 'redux'

const songsReducer=()=>{
    return [
        {title:"dil bechara",duration:"4:05"},
        {title:"churake dil",duration:"1:05"},
        {title:"hua hua",duration:"5:03"}
    ]
}
const selectedSongReducer=(selectedSong= null,action)=>{
    if(action.type ==='SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})