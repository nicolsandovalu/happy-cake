

const Contact = () => {
    return (
        <div className="contacto">
            <h1>¿Cómo podemos ayudarte?</h1>

            <div>
                <form>
                    <div className="mb-3 m-4">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 m-4">
                        <label for="mensaje" className="form-label">Descripción</label>
                        <textarea type="text" className="form-control" id="mensaje" />
                    </div>
                    <button type="submit" className=" m-4">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact