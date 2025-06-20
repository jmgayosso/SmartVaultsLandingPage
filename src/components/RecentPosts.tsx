
export const RecentPosts = () => {
  const posts = [
    {
      title: "Inheritance: What will happen to your bitcoin when you are gone?",
      image: "🏠"
    },
    {
      title: "Social Recovery: Do you want to self-custody your bitcoin but are afraid of losing access to it?",
      image: "🤝"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">Recent posts</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-200 to-yellow-200 rounded-xl h-48 flex items-center justify-center mb-4">
                <span className="text-6xl">{post.image}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 leading-tight">{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
