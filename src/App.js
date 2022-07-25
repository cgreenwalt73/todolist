import './App.css';
import {useState} from 'react';

function App() {

  const [list, setList] = useState([]);
  const [newListItem, setNewListItem] = useState('');

  const addListItem = (e) => {
    e.preventDefault();
    
    if (newListItem === '') {
      return;
    }

    const listItem = {
      text: newListItem,
      complete: false
    }
    setList([...list, listItem]);
    setNewListItem('');
};

  const deleteListItem = (indexToDelete) => {
    const filteredList = list.filter((listItem, index) => {
      return (index !== indexToDelete)
    });
    setList(filteredList);
  }

  const completeTask = (listItem) => {
    listItem.complete = !listItem.complete;
    setList([...list]);
  }

  return (
    <div className="App">
      <h1>To Do List:</h1>
      <form onSubmit= { (e) => {addListItem(e);} }>
        <label>
          <input type='text' value={newListItem} onChange={ (e) => setNewListItem(e.target.value) }></input>
          <input type='submit' ></input>
        </label>
      </form>

      {
        list.map((listItem, index) => {
          return(
            <div key={index}>
              <input onChange={ (e) => {
                completeTask(listItem);
              }}
              checked={list.complete} type='checkbox'/>
              {listItem.text}
              <button onClick={(e) => {deleteListItem(index);} }>Delete</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
