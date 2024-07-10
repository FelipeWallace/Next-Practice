/* 
  Posso usar este projeto de exemplo para criar paginas dinamicas 
  para os itens do cardapio ou o proprio cardapio do dia, por exemplo
*/

// import Link from "next/link"

// async function getPets() {
//   const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
//   const pets = await petsPromise.json()
//   return pets
// }

// export default async function Page() {
//   const pets = await getPets()

//   return (
//     <div>
//       <h3>List of pets</h3>
//       <ul>
//         {pets.map((pet, index) => {
//           return (
//             <li key={index}>
//               <Link href={"/pet/" + pet.name.toLowerCase()}>{pet.name}</Link>
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

export default function Page () {
  return (
    <div>
      <a href="">
      <h2>Eventos em Londres</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In exercitationem aspernatur nihil suscipit qui explicabo corrupti, et beatae assumenda deserunt culpa. Modi totam repellat libero adipisci, harum dolore temporibus delectus?
      Esse quia obcaecati magnam doloremque natus, aut optio aspernatur, consequuntur atque sed dignissimos nobis doloribus voluptates laborum quidem similique adipisci at. Perspiciatis nihil fuga qui deleniti officiis! Quo, dolores ratione?
      Repellendus quidem mollitia quo laudantium nulla cumque vero, alias corporis sit recusandae quae iste beatae consectetur aspernatur doloribus consequuntur ullam autem blanditiis debitis fuga iure nam aperiam eos magnam. Deleniti.
      Mollitia illo voluptates cupiditate nihil consequuntur? At error incidunt illo officiis modi soluta nesciunt fugiat eveniet tenetur natus reiciendis earum velit voluptatum, cupiditate, quaerat maiores perspiciatis! Odit adipisci praesentium sapiente.
      Quis corporis suscipit est incidunt amet eaque deleniti pariatur mollitia non veniam repellat commodi, praesentium iusto, doloremque dicta, perferendis corrupti sapiente debitis laborum molestiae voluptatum. Delectus blanditiis temporibus vitae facere!
      Sint tempore, ab fugit, fugiat illo non quisquam dolore quod saepe velit dolores omnis? Commodi ad omnis enim nihil at ipsa quia! Nemo, praesentium quo corporis quae sint quam excepturi.</p>
    </a>

    <a href="">
    <h2>Eventos em Londres</h2>
    <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In exercitationem aspernatur nihil suscipit qui explicabo corrupti, et beatae assumenda deserunt culpa. Modi totam repellat libero adipisci, harum dolore temporibus delectus?
    Esse quia obcaecati magnam doloremque natus, aut optio aspernatur, consequuntur atque sed dignissimos nobis doloribus voluptates laborum quidem similique adipisci at. Perspiciatis nihil fuga qui deleniti officiis! Quo, dolores ratione?
    Repellendus quidem mollitia quo laudantium nulla cumque vero, alias corporis sit recusandae quae iste beatae consectetur aspernatur doloribus consequuntur ullam autem blanditiis debitis fuga iure nam aperiam eos magnam. Deleniti.
    Mollitia illo voluptates cupiditate nihil consequuntur? At error incidunt illo officiis modi soluta nesciunt fugiat eveniet tenetur natus reiciendis earum velit voluptatum, cupiditate, quaerat maiores perspiciatis! Odit adipisci praesentium sapiente.
    Quis corporis suscipit est incidunt amet eaque deleniti pariatur mollitia non veniam repellat commodi, praesentium iusto, doloremque dicta, perferendis corrupti sapiente debitis laborum molestiae voluptatum. Delectus blanditiis temporibus vitae facere!
    Sint tempore, ab fugit, fugiat illo non quisquam dolore quod saepe velit dolores omnis? Commodi ad omnis enim nihil at ipsa quia! Nemo, praesentium quo corporis quae sint quam excepturi.
    </p>
    </a>

    <a href="">
    <h2>Eventos em Londres</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In exercitationem aspernatur nihil suscipit qui explicabo corrupti, et beatae assumenda deserunt culpa. Modi totam repellat libero adipisci, harum dolore temporibus delectus?
    Esse quia obcaecati magnam doloremque natus, aut optio aspernatur, consequuntur atque sed dignissimos nobis doloribus voluptates laborum quidem similique adipisci at. Perspiciatis nihil fuga qui deleniti officiis! Quo, dolores ratione?
    Repellendus quidem mollitia quo laudantium nulla cumque vero, alias corporis sit recusandae quae iste beatae consectetur aspernatur doloribus consequuntur ullam autem blanditiis debitis fuga iure nam aperiam eos magnam. Deleniti.
    Mollitia illo voluptates cupiditate nihil consequuntur? At error incidunt illo officiis modi soluta nesciunt fugiat eveniet tenetur natus reiciendis earum velit voluptatum, cupiditate, quaerat maiores perspiciatis! Odit adipisci praesentium sapiente.
    Quis corporis suscipit est incidunt amet eaque deleniti pariatur mollitia non veniam repellat commodi, praesentium iusto, doloremque dicta, perferendis corrupti sapiente debitis laborum molestiae voluptatum. Delectus blanditiis temporibus vitae facere!
    Sint tempore, ab fugit, fugiat illo non quisquam dolore quod saepe velit dolores omnis? Commodi ad omnis enim nihil at ipsa quia! Nemo, praesentium quo corporis quae sint quam excepturi.</p>
    </a>
    </div>
  )
}