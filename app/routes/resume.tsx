import { useEffect,useState } from "react";
import { useParams,Link, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => {
  [
    { title: " Resumind | Review" },
    { name: " description", content: "Detailed overview of your resume" },
  ];
};

const resume = () => {
  const {auth, isLoading, fs, kv} = usePuterStore();
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState('');
  const [resumeUrl, setResumeUrl] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadResume = async () => {
      const resume = await kv.get(`resume-${id}`);
      
      if(!resume) return;

      const data = JSON.parse(resume);

      const resumeBlob = await fs. read(data.resumePath);
      if(!resumeBlob) return;

      const pdfBlob = new Blob([resumeBlob], {type:'application/pdf'});
      const resumeUrl = URL.createObjectURL(pdfBlob);
      setResumeUrl(resumeUrl);

      const imageBlob = await fs.read(data.imagePath);
      if(!imageBlob) return;

      const imgBlob = new Blob([imageBlob], {type:'image/png'});
      const imageUrl = URL.createObjectURL(imgBlob);
      setImageUrl(imageUrl);

      setFeedback(data.feedback);
    }
  },[id])

  return (
    <main className="!pt-0">
        <nav className="resume-nav">
            <Link to='/' className="back-button">
                <img src="/icons/back.svg" className="w-2.5 h-2.5" alt="" />
                <span className="text-gray-800 text-sm font-semibold">Back to HomePage</span>
            </Link>
        </nav>
        <div className="flex flex-row w-full max-lg:flex-col-reverse">
            <section className="feedback-section">
                {imageUrl && resumeUrl && (
                    <div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit">

                    </div>
                )}
            </section>
        </div>
    </main>
  )
};

export default resume;
