export default function Page() {
  return (
    <section className="max-w-3xl mx-auto p-4">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Work Experience</h1>
      
      <div className="space-y-6">
        <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 shadow-md">
          <h2 className="font-semibold text-lg mb-4">
            <span className="block text-blue-600 dark:text-blue-400">Researcher</span>
            <span className="block text-sm text-gray-600 dark:text-gray-400">York University (Sep 2022 - Present)</span>
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Developed LLM-powered tools with LangChain for software engineering tasks and employed prompt techniques such as chain-of-thought.</li>
            <li>Utilized GPT-4 Turbo to enhance Cyber-Physical Systems' safety by identifying vulnerabilities, achieving a 95% confidence in system safety.</li>
            <li>Facilitated lab activities and evaluated assignments in Advanced Object-Oriented Programming and Software Testing courses.</li>
          </ul>
        </div>
        <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 shadow-md">
          <h2 className="font-semibold text-lg mb-4">
            <span className="block text-blue-600 dark:text-blue-400">Machine Learning Fellow</span>
            <span className="block text-sm text-gray-600 dark:text-gray-400">AI4Good Lab (May 2024 - Jun 2024)</span>
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Created a mental health chatbot for students, powered by Generative AI. Fine-tuned GPT-3.5 using conversational data and deployed it using Streamlit.</li>
            <li>Completed a 7-week program including machine learning lectures and workshops covering neural networks, convolutional neural networks, reinforcement learning, recurrent neural networks, and generative AI.</li>
          </ul>
        </div>
        <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 shadow-md">
          <h2 className="font-semibold text-lg mb-4">
            <span className="block text-blue-600 dark:text-blue-400">Software Engineer</span>
            <span className="block text-sm text-gray-600 dark:text-gray-400">Porsline (Mar 2021 - Jun 2022)</span>
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Refactored the response page of Porsline by implementing Next.js and Redux toolkit, resulting in a 60% increase in user engagement and survey creation efficiency.</li>
            <li>Enhanced test coverage to 80% by implementing tests, utilizing Jest and React Testing Library.</li>
            <li>Led a scrum team of 7 frontend developers, managing project workflows and fostering team growth, while also actively participating in the recruitment and interview process.</li>
          </ul>
        </div>
        <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 shadow-md">
          <h2 className="font-semibold text-lg mb-4">
            <span className="block text-blue-600 dark:text-blue-400">Frontend Developer</span>
            <span className="block text-sm text-gray-600 dark:text-gray-400">Iranian Medical Computing (Jul 2020 - Feb 2021)</span>
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Implemented an online 3D exhibition platform using React.js and Three.js, boosting user satisfaction by 70%.</li>
            <li>Developed an interactive web conferencing system featuring real-time video, audio, and text communication through WebRTC and Socket.io which handled more than 1000 users.</li>
          </ul>
        </div>
        <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 shadow-md">
          <h2 className="font-semibold text-lg mb-4">
            <span className="block text-blue-600 dark:text-blue-400">Mobile Application Developer/Intern</span>
            <span className="block text-sm text-gray-600 dark:text-gray-400">Pheebs (Jun 2019 - May 2020)</span>
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Implemented a mobile bank application for Maskan Bank using React Native and Redux which had more than 5000 users.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}