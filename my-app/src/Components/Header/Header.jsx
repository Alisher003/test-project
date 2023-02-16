import './Header.css'



function Header () {
  return (
    <header className='header'>
      <div className='hero container'>
        <img src="{logoImage}" alt="" />
          <h1>
            Texno labaratoriyada amaliy ilm oling
          amaliy ilm olingTexno labaratoriyada
          </h1>
          <p>Siz sifatli ilm olib muvaffaqqiyatli kelajakga loyiqsiz!</p>
          <button>Kursga yozilish</button>
      </div>
    </header>
  );
}

export default Header;