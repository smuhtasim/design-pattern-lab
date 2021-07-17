interface userText {
    operation(): string
}

class normalText implements userText {

    sampleText: string

    constructor(inputText: string) {
        this.sampleText = inputText
    }

    public operation(): string {
        return this.sampleText;
    }
}

class textModifier implements userText {
    protected sampleText: userText;

    constructor(component: userText) {
        this.sampleText = component;
    }

    public operation(): string {
        return this.sampleText.operation();
    }
}


function printer(sample: userText) {
    console.log(`New modiied text after decoration: ${sample.operation()}`);
}


class boldModifier extends textModifier {
    public operation(): string {
        return super.operation().bold();
    }
}

class italicModifier extends textModifier {
    public operation(): string {
        return super.operation().italics();
    }
}

class strikeModifier extends textModifier {
    public operation(): string {
        return super.operation().strike();
    }
}



const text = new normalText('Design Pattern Lab 02');
const modifiedItalic = new italicModifier(text);
const modifiedBold = new boldModifier(text);
const modifiedStrike = new strikeModifier(text);

printer(modifiedItalic);
printer(modifiedBold);
printer(modifiedStrike);