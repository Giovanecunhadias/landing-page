import './style.css'

export default function WhatsappButton() {
        return (
            <>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
                />
                <a
                    href="https://api.whatsapp.com/send?phone=51955081075&text=Hola! Quisiera más información sobre Varela 2."
                    className="float animate-bounce animate-delay-1 animate-infinite"
                    target="_blank"
                >
                    <i className="fa fa-whatsapp my-float"></i>
                </a>
            </>
        );
}