export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md text-left mb-8">
        <div className="flex justify-between text-gray-500 text-sm">
          <p>Tue Feb 18 2025</p>
          <p>9:31:25 p.m.</p>
        </div>
        <h1 className="text-2xl font-bold mt-2">List Tailwind</h1>
      </div>

      <section className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <div className="grid grid-cols-7 gap-2 text-center text-gray-500 text-sm mb-4">
          {['s','m','t','w','t','f','s'].map((day, index) => (
            <span key={index} className="font-bold">{day}</span>
          ))}
          {['24','25','26','27','28','29','30'].map((date, index) => (
            <span key={index}>{date}</span>
          ))}
        </div>

        <div className="space-y-2">
          {[
            {text: 'take out the trash', time: '9:00 AM', done: true},
            {text: 'do homework', time: '12:00 PM', done: true},
            {text: 'go to grocery store', time: '1:00 PM', done: false},
            {text: 'run 5 kilometers', time: '4:20 PM', done: false},
            {text: 'load the dishwasher', time: '9:00 PM', done: false},
            {text: 'Take out the trash', time: '9:00 AM', done: false}
          ].map((task, index) => (
            <div key={index} className="flex items-center bg-gray-50 p-2 rounded-lg shadow-sm">
              <span className={`w-6 h-6 flex items-center justify-center rounded-full ${task.done ? 'bg-green-500 text-white' : 'border-2 border-gray-300'}`}>
                {task.done && '✔'}
              </span>
              <p className="flex-1 ml-2 text-gray-700 truncate">{task.text}</p>
              <span className="text-sm text-gray-500">{task.time}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
