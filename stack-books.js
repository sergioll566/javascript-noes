const books =  new Array();


const input_name_book = document.getElementById("name-book-field");

const validate_input_name_book = (name)=>{
    if (name.replaceAll(" ",'').length === 0) return false;
    
    for (let book of books){
        if (book === name.toLowerCase())return false;
    }
    return true;

}


function add_book(){
    const value = input_name_book.value;
    const result = validate_input_name_book(value)
    if (result===false) {
        alert("Ese libro ya esta en la lista")
        return;
    }
    
    books.push(value)
    render_new_book(books[books.length-1])
}
const books_content = document.getElementById('list-books')
const render_new_book = (bookname)=>{
    books_content.innerHTML += `<span>${bookname}</span><hr>`
}
const render_all_books = ()=> {
    books_content.innerHTML = ""
    books.forEach((value)=>render_new_book(value))
}
function remove_last_book(){
    books.pop()
    render_all_books()
}