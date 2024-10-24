export default async function getAmmount(id, difficulty) {
  const response = await fetch(
    `https://opentdb.com/api_count.php?category=${id}`
  );

  const data = await response.json();

  let ammount = 0;
  if (difficulty.toLowerCase() == "easy") {
    ammount = data.category_question_count.total_easy_question_count;
  } else if (difficulty.toLowerCase() == "medium") {
    ammount = data.category_question_count.total_medium_question_count;
  } else if (difficulty.toLowerCase() == "hard") {
    ammount = data.category_question_count.total_hard_question_count;
  }

  return ammount < 50 ? ammount : 50;
}
