import { StarWrapper } from '../hoc';

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-zinc-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-amber-400 font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              disabled={loading}
              placeholder="Please enter your name"
              className="bg-zinc-200 py-4 px-6 placeholder:text-secondary text-amber-400 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-amber-400 font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              disabled={loading}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-zinc-200 py-4 px-6 placeholder:text-secondary text-amber-400 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-amber-400 font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              disabled={loading}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-zinc-200 py-4 px-6 placeholder:text-secondary text-amber-400 rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-amber-400 hover:bg-amber-500 py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-zinc-500/50">
            {loading ? 'Sending...' : 'Send Email'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};
export default StarWrapper(Contact, 'contact');
