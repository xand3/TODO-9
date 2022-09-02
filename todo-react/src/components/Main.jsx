export function Main() {
    

    return (
        <div className="main-content">
            <div className="main-info">
                <h3>Ajude o algorítimo a ser mais certeiro</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque ultricies tellus nec mi porta convallis
                    sollicitudin eu urna. Mauris rhoncus erat sed interdum
                    dignissim. Suspendisse semper pretium consectetur. Praesent
                    bibendum arcu risus, sit amet iaculis ex tempus quis. Cras
                    et erat ut tellus vulputate tincidunt. Aenean lacinia
                    euismod augue vel egestas. Class aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos.
                    Vestibulum vel urna tortor. Vivamus et arcu non felis
                    tristique eleifend. Morbi eu condimentum urna. Curabitur eu
                    magna eget turpis condimentum ultrices. Suspendisse quis
                    lorem ultricies, pulvinar purus sed, egestas erat. Etiam
                    ultricies a ante vehicula pharetra. Quisque ut neque mattis,
                    consequat velit ut, ultrices orci. Nulla varius elementum
                    erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra,
                    magna ac luctus commodo, odio ante suscipit libero, at
                    mattis augue est vel metus.
                </p>
            </div>
            <div className="main-form">
                <form>
                    <label htmlFor="">Seu nome:</label>
                    <input type="text" />
                    <label htmlFor="">E-mail</label>
                    <input type="text" />
                    <label htmlFor="">CPF:</label>
                    <input type="number" />
                    <div className="radios">
                        <input type="radio" name="sex" id="masc" />
                        <label htmlFor="masc">Masculino</label>
                        <input type="radio" name="sex" id="fem" />
                        <label htmlFor="fem">Feminino</label>
                    </div>
                    <input
                        className="submit"
                        type="submit"
                        value="Enviar"
                    ></input>
                </form>
            </div>
        </div>
    );
}
