import { Ban, Check, Loader } from "lucide-react";

const Notification = ({ message, onClose, results, loading, success }) => {
  return (
    <section className="fixed top-0 left-0 w-screen h-screen z-40 bg-modal">
      <section className="absolute top-1/2 left-1/2 -translate-1/2 bg-white w-xl rounded-xl shadow-xl p-4 flex flex-col gap-4">
        <h1 className="text-main text-2xl">{message}</h1>
        <section className="flex-1">
          {results.length > 0 ?
            <section className="flex flex-col gap-2">
              <h2 className="text-xl">Total de notícias classificadas: <strong className="text-secondary">{results.length}</strong></h2>
              <table className="w-full rounded-lg overflow-hidden">
                <thead className="bg-main text-white">
                  <tr>
                    <th className="border border-collapse">Irrelevantes</th>
                    <th className="border border-collapse">Boas</th>
                    <th className="border border-collapse">Ruins</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-light text-white text-center">
                    <td className="text-lg border border-collapse">{results.filter((item => item.classificacao === 'irrelevante')).length}</td>
                    <td className="text-lg border border-collapse">{results.filter((item => item.classificacao === 'boa')).length}</td>
                    <td className="text-lg border border-collapse">{results.filter((item => item.classificacao === 'ruim')).length}</td>
                  </tr>
                  <tr className="bg-opaque text-white text-center font-semibold">
                    <td className="text-lg border border-collapse" colSpan={2}>Total</td>
                    <td className="text-lg border border-collapse">{results.length}</td>
                  </tr>
                </tbody>
              </table>
              <Check className="text-success absolute right-4 top-4" size={40} />
            </section>
            : loading ?
              <Loader className="rotate absolute right-4 top-4" size={40} />
              : success ?
                <Check className="text-success absolute right-4 top-4" size={40} />
                :
                <Ban className="text-danger absolute right-4 top-4" size={40} />
          }
        </section>
        {onClose &&
          <section className="text-right">
            <button onClick={onClose} className="bg-main text-white p-2 rounded-sm cursor-pointer hover:bg-light duration-300">CONFIRMAR</button>
          </section>
        }
      </section>
    </section>
  );
};

export default Notification;