const uri = "https://api.trello.com/";
export const appKey = "1476e4d6cc0bec828338050c24381b18";
export const appSecret = "dc741abe2a661c7cc7b9727d0297bb4f8e46815512c7a7e3223b68ccd012d018";
const token = localStorage.getItem('token') || '';

export type CardType = {
    name: string,
    id: string,
    shortUrl: string,
    dateLastActivity: string,
    desc: string,
    closed: boolean
}

export type ListType = {
    name: string,
    id: string,
    cards: CardType[],
    totalCard: number
}

export type BoardType = {
    name: string,
    id: string,
    url: string,
    desc: string,
    shortUrl: string
}

const redirectToLogin = () => window.location.replace(`${process.env.PUBLIC_URL}`);

const requestGet = async (url: string) => {
    try {
        const response = await fetch(url);
        return await response.json();
    }
    catch (err) {
        console.log(err);
        redirectToLogin();
    }
}

export const fetchBoards = async () => requestGet(`${uri}1/members/me/boards?fields=name,id,url,list&key=${appKey}&token=${token}`);
export const fetchLists = async (boardId: string) => requestGet(`${uri}1/boards/${boardId}/lists?fields=name,id&key=${appKey}&token=${token}`);
export const fetchCards = async (listId: string) => requestGet(`${uri}1/lists/${listId}/cards?key=${appKey}&token=${token}`);
export const fetchBoard = async (boardId: string) => requestGet(`${uri}1/boards/${boardId}?key=${appKey}&token=${token}`);