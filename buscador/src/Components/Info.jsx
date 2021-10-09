import React from 'react'

const Info = ({info}) => {
    const {strArtistThumb, strGenre,strBiographyES} = info
    if(Object.keys(info).length === 0) return null
    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo artista" />
                <p className="card-text">
                    Genero: {strGenre}
                </p>
                <h2 className="card-text">
                    Biografia
                </h2>
                <p className="card-text">
                    {strBiographyES}
                </p>
            </div>
        </div>
      );
}
 
export default Info;