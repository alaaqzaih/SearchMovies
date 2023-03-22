import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import './Dialog.scss'
const Detail = (props) => {
  const [open, setOpen] = React.useState(true);
  const [currentmovie, setCurrentMovie] = useState(null);
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${props.imval}&apikey=44d91aee`)
      .then((response) => response.json())
      .then((data) => setCurrentMovie(data));
  }, [props.imval]);

  const handleClose = () => {
    setOpen(false);
    props.funsetdetailbool();
  };
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="moviePosterDialog"
      >
        {currentmovie && (
          <>
            <DialogTitle>{currentmovie.Title}</DialogTitle>
            <DialogContent>
            <img
          src={currentmovie.Poster}
          className="moviePosterDetail"
          alt="Poster"
        />
              <DialogContentText id="alert-dialog-description">
                <p>Year: {currentmovie.Year}</p>
                <p>Director: {currentmovie.Director}</p>
                <p>Cast: {currentmovie.Actors}</p>
                <p>Plot: {currentmovie.Plot}</p>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};
export default Detail;
