import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function SearchModal({ data }) {
  const [location, setLocation] = useState("Whole");
  const [countAdult, setCountAdult] = useState(0);
  const [countChild, setCountChild] = useState(0);
  const [listHidden, setListHidden] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleHideFalse = () => {
    setListHidden(false);
  };

  const toggleHideTrue = () => {
    setListHidden(true);
  };

  const handleClick = (event) => {
    const location = event.target.getAttribute('data-location');
    setLocation(location);
  };

  const increase = () => {
    setCountAdult(countAdult + 1);
  };

  const decrease = () => {
    if (countAdult === 0) {
      return;
    } else {
      setCountAdult(countAdult - 1);
    }
  };

  const increaseChild = () => {
    setCountChild(countChild + 1);
  };

  const decreaseChild = () => {
    if (countChild === 0) {
      return;
    } else {
      setCountChild(countChild - 1);
    }
  };

  const addGuests = countAdult + countChild;
  const location1 = location + " , Finlandia";
  const uniqueCities = new Set(data.map(item => item.city));

  return (
    <div className='flex w-90'>
    {/* Lado izquierdo: Logo */}
    <div className="w-1/3 bg-white p-4 flex items-center justify-center">
      {/* Coloca tu logo aquí */}
      <img
        src="./src/img/logo.svg"
        alt="Logo"
        className="max-w-full h-auto logo-svg"
      />
    </div>

      {/* Lado derecho: Barra de búsqueda */}
      <div className="w-2/3 flex flex-col p-1">
        <button onClick={handleOpen} className='button container'>
          {/* Input de ubicación */}
          <input type='text' className="lg:w-2/5 rounded-l-lg shadow-md h-10 pl-4" value={location1}></input>
          {/* Input de cantidad de invitados */}
          <input type='text' className="lg:w-2/5 shadow-md h-10 pl-4" value={addGuests !== 0 ? addGuests : "Add Guests"} />
          {/* Botón de búsqueda */}
          <button className='lg:button-search rounded-r-lg shadow-md h-9 px-5'>
            <SearchIcon className="material-icons" style={{ color: 'red' }} />
          </button>
        </button>
      </div>

      {/* Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {/* Contenido del modal */}
          <Box className="w-full h-70" sx={style}>
            <Typography className='mt-4' id="transition-modal-title" variant="h6" component="h2">
              Texto en el modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {/* Inputs superiores del modal */}
              <section className="container h-1/2 mt-40">
                <input className='mt-60 w-5/12 h-12 drop-shadow-md rounded-l-lg' value={location1} onClick={toggleHideTrue}></input>
                <input className='mt-60 w-5/12 h-12 drop-shadow-md' value={addGuests !== 0 ? addGuests : "Add Guests"} onClick={toggleHideFalse} />
                <button className="bg-red-600 rounded-md drop-shadow-md text-white w-2/12 h-12" variant="contained" onMouseUp={handleClose}>
                  <span className="material-symbols-outlined">Search</span>
                  Search
                </button>
              </section>

              {/* Localizaciones */}
              <section id="location-counter" className='lg:flex w-full'>
                {/* Lista de localizaciones */}
                <ul className={`w-1/3 ${listHidden ? '' : 'hide'}`}>
                  {/* Mapeo de ciudades únicas */}
                  {[...uniqueCities].map(city => (
                    <li key={city} className='mt-8' data-location={city} onClick={handleClick}>
                      <span id="location" class="material-symbols-outlined">
                        location_on
                      </span>
                      {city + " , Finlandia"}
                    </li>
                  ))}
                </ul>

                {/* Contadores */}
                <section className={`w-2/3 ml-40 mt-8 ${listHidden ? 'hide' : ''}`}>
                  {/* Contador de adultos */}
                  <h3 className='font-bold'>
                    Adultos
                  </h3>
                  <p>Edades 13 o más</p>
                  <div className='py-8 flex gap-4 pr-4'>
                    <span id="minus" class="material-symbols-outlined" onClick={decrease}>
                      indeterminate_check_box
                    </span>
                    <span>{countAdult}</span>
                    <span id='plus' class="material-symbols-outlined" onClick={increase}>
                      add_box
                    </span>
                  </div>
                  {/* Contador de niños */}
                  <h3 className='font-bold'>
                    Niños
                  </h3>
                  <p>Edades 2 - 12</p>
                  <div className='py-8 flex gap-4 pr-4'>
                    <span id="minus" class="material-symbols-outlined" onClick={decreaseChild}>
                      indeterminate_check_box
                    </span>
                    <span>{countChild}</span>
                    <span id='plus' class="material-symbols-outlined" onClick={increaseChild}>
                      add_box
                    </span>
                  </div>
                </section>
              </section>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default SearchModal;

