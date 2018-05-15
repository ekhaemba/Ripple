from matplotlib import pyplot as plt
import numpy as np

def scarcityPlot():

    quan = demand = np.arange(.2,10,.01)
    quan1 = supply1 = np.arange(.2,3,.01)


    demand = quan**-.25
    supply1 = .07*quan1
    supply2 = np.arange(.23,1.56,.1)
    supply3 = .07*quan
    quan2 = [3]*len(supply2)

    fig, ax = plt.subplots( nrows=1, ncols=1 )
    # fig.add_axes([0,0,1,1])

    plt.plot(quan,demand,color = "r", linewidth=6, label="Demand")
    plt.plot(quan1, supply1, color = "b", linewidth=6, label="Supply")
    plt.plot(quan2,supply2,color = "b", linewidth=6)
    plt.plot(quan,supply3,color = "b", linewidth=3, linestyle="--")

    plt.legend(loc='upper right')
    plt.title("Scarcity Curve", fontsize = 20)

    plt.xlabel('Quantity', fontsize=14)
    plt.ylabel('Price', fontsize=14)

    ax.set_yticklabels([])
    ax.set_xticklabels([])

    # plt.show()

    fig.savefig('ScarcityCurve.png')
    plt.close(fig)

def normalPlot():
    
    quan = demand = np.arange(.2,10,.01)
    demand = quan**-.25
    supply1 = .15*quan
    supply2 = .15*quan + .3
    
    fig, ax = plt.subplots( nrows=1, ncols=1 )
    # fig.add_axes([0,0,1,1])

    plt.plot(quan,demand,color = "r", linewidth=6, label="Demand")
    plt.plot(quan, supply1, color = "b", linewidth=6, label="Supply")
    plt.plot(quan, supply2, color = "b", linestyle='-', linewidth=6)

    plt.legend(loc='upper right')
    plt.title("Normal Curve", fontsize = 20)

    plt.xlabel('Quantity', fontsize=14)
    plt.ylabel('Price', fontsize=14)

    ax.set_yticklabels([])
    ax.set_xticklabels([])

    fig.savefig('NormalCurve.png')
    plt.close(fig)

# normalPlot()
scarcityPlot()
