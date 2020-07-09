function myLibrary()
{

var booklist;

function loadBooks(books)
{
 booklist=books;   
}

function isBookAvailable(book)
{
    return booklist.indexOf(book)>=0;
}

function isBookAsync(book, checkBook)
  {
     setTimeout(  function()
     {
         checkBook(booklist.indexOf(book)>=0)
     },2000
     );

  }

  return{
      loadBooks,  isBookAvailable, isBookAsync
  }

}

module.exports=myLibrary()

