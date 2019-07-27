using System.IO;

namespace AfricanArtoramaAPI.Framework.BusinessLogic.EFRepositories
{
    public class ArtImagesRepository
    {
        public string Get(string fileLocation)
        {
            FileStream fileStream = new FileStream(fileLocation, FileMode.Open);

            string fileContents;
            using (StreamReader reader = new StreamReader(fileStream))
            {
                fileContents = reader.ReadToEnd();
            }

            return fileContents;
        }

        public string Save(string fileRaw, string folderName, string fileName)
        {
            MemoryStream stream = new MemoryStream();
            StreamWriter writer = new StreamWriter(stream);
            writer.Write(fileRaw);
            writer.Flush();
            stream.Position = 0;

            var path = string.Format(@"{1}/ArtoramaImages/{0}", folderName, Path.GetTempPath());

            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            var fileLocation = string.Format(@"{0}\{1}", path, fileName);

            var fileStream = File.Create(fileLocation);
            stream.Seek(0, SeekOrigin.Begin);
            stream.CopyTo(fileStream);
            fileStream.Close();

            return fileLocation;
        }
    }
}