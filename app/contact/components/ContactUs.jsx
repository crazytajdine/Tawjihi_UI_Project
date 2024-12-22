const ContactUs = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
        <h1 className="text-3xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-lg mb-6">Nous sommes là pour répondre à vos questions.</p>
        <form className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded p-2"
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Adresse Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded p-2"
              placeholder="Votre email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border rounded p-2"
              placeholder="Votre message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full"
          >
            Envoyer
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactUs;
  