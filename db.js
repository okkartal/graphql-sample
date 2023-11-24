let videos = [
    {id: '1', title: 'Video 1', quality: ['1080']},
    {id: '2', title: 'Video 2', quality: ['1080', '720']},
    {id: '3', title: 'Video 3', quality: ['1080', '720', '480']},
    {id: '4', title: 'Video 4', quality: ['720']},
    {id: '5', title: 'Video 5', quality: ['720', '480']},
  ]
  
  let authors = [
    {id: '1', name: 'osman', verified: true},
    {id: '2', name: 'kadir', verified: false},
    {id: '3', name: 'kartal', verified: true},
  ]
  
  let reviews = [
    {id: '1', rating: 9, content: 'some review 1', author_id: '1', video_id: '2'},
    {id: '2', rating: 10, content: 'some review 2', author_id: '2', video_id: '1'},
    {id: '3', rating: 7, content: 'some review 3', author_id: '3', video_id: '3'},
    {id: '4', rating: 5, content: 'some review 4', author_id: '2', video_id: '4'},
    {id: '5', rating: 8, content: 'some review 5', author_id: '2', video_id: '5'},
    {id: '6', rating: 7, content: 'some review 6', author_id: '1', video_id: '2'},
    {id: '7', rating: 10, content: 'some review 7', author_id: '3', video_id: '1'},
  ]
  
  export default { videos, authors, reviews }