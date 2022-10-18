function diaSemana(x) {
    switch(x) {
        case '01':
            console.log('Segunda');
            break;
            case '02':
                console.log('Terça');
                break;
                case '03':
                    console.log('Quarta');
                    break;
                    case '04':
                        console.log('Quinta');
                        break;
                        case '05':
                            console.log('Sexta');
                            break;
                                case '06':
                                console.log('Sabado');
                                break;
                                    case '07':
                                    console.log('Domingo');
                                    break;
                                        default:
                                        console.log(`O número ${x} não é valido para dia da semana`);
    }
}

diaSemana('04')