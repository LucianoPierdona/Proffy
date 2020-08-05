import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface TeacherItemProps {
    teacher: {
        avatar: string;
        bio: string;
        cost: number;
        id: number;
        name: string;
        subject: string;
        whatsapp: string;
    };
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="Luciano Pierdona" />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
                <p>{teacher.bio}</p>
            <footer>
                <p>
                    preço/hora
                    <strong>{teacher.cost}</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;