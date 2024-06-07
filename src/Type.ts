export interface User {
    id: string; // Добавьте это свойство, если его нет
    name: string;
    email: string;
    active: boolean;
    role: 'user' | 'editor' | 'admin';
}

export interface UserMutation {
    name: string;
    email: string;
    active: boolean;
    role: 'user' | 'editor' | 'admin';
}
