export function Footer() {
    return (
        <div className="footer-content">
            <fieldset>
                <legend>Compartilhe a novidade</legend>
            </fieldset>
            <div className="footer">
                <p>
                    Quer que seus amigos também ganhem a lista personalizada
                    deles? Preencha agora!
                </p>
                <div className="footer-form">
                    <div className="form">
                        <div className="form-friend">
                            <label htmlFor="">Nome do seu amigo:</label>
                            <input type="text" />
                        </div>
                        <div className="form-friend">
                            <label htmlFor="">E-mail: </label>
                            <input type="text" />
                        </div>
                    </div>
                    <input
                        className="footer-submit"
                        type="submit"
                        value="Enviar agora"
                    ></input>
                </div>
            </div>
            <div className="copy">
                <div className="copy-text">
                    <p>Testando suas habilidades em HTML, CSS e JS. Linx Impulse 2019</p>
                </div>
            </div>
        </div>
    );
}
